import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

type Result = {
  eligible: boolean;
  message: string;
  details: string;
} | null;

const citizenshipOptions = ["South African", "British", "EU National", "Other"];
const destinationOptions = ["United Kingdom", "Schengen Area / EU", "United States", "Other"];
const goalOptions = ["Work", "Tourism"];

function checkEligibility(citizenship: string, destination: string, goal: string, salary: number): Result {
  if (destination === "United Kingdom" && goal === "Work") {
    if (salary >= 41700) {
      return {
        eligible: true,
        message: "You meet the 2026 UK salary threshold!",
        details: `Your salary of £${salary.toLocaleString()} exceeds the £41,700 Skilled Worker threshold. You may qualify for a UK Skilled Worker Visa.`,
      };
    }
    return {
      eligible: false,
      message: "Below the 2026 UK salary threshold.",
      details: `The 2026 UK Skilled Worker visa requires a minimum salary of £41,700. Your stated salary is £${salary.toLocaleString()}. Contact us for alternative pathways.`,
    };
  }
  if (destination === "Schengen Area / EU") {
    if (goal === "Tourism") {
      return {
        eligible: true,
        message: "ETIAS Authorization Required (Q4 2026)",
        details: `As a ${citizenship} passport holder, you'll need ETIAS authorization for Schengen tourism from Q4 2026. We can guide you through the process.`,
      };
    }
    return {
      eligible: true,
      message: "Work visa options available",
      details: "Multiple EU work visa pathways exist. Book a consultation for a personalised assessment based on your qualifications.",
    };
  }
  return {
    eligible: true,
    message: "Assessment available",
    details: "We can evaluate your eligibility for this destination. Book a free consultation for a detailed analysis.",
  };
}

const EligibilityChecker = () => {
  const { ref, isVisible } = useScrollReveal();
  const [citizenship, setCitizenship] = useState("");
  const [destination, setDestination] = useState("");
  const [goal, setGoal] = useState("");
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState<Result>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = checkEligibility(citizenship, destination, goal, Number(salary) || 0);
    setResult(res);
  };

  const selectClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <section ref={ref} className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            Interactive Tool
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            2026 Visa Eligibility Checker
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate your entry requirements based on the 2026 UK salary threshold (£41,700) and ETIAS Q4 2026 updates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Citizenship</label>
                <select value={citizenship} onChange={(e) => setCitizenship(e.target.value)} className={selectClass} required>
                  <option value="">Select...</option>
                  {citizenshipOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Destination</label>
                <select value={destination} onChange={(e) => setDestination(e.target.value)} className={selectClass} required>
                  <option value="">Select...</option>
                  {destinationOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Goal</label>
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className={selectClass} required>
                  <option value="">Select...</option>
                  {goalOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Annual Salary (£)</label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="e.g. 45000"
                  className={selectClass}
                />
              </div>
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6">
              Check Eligibility <ArrowRight size={18} />
            </Button>
          </form>

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`mt-6 p-6 rounded-2xl border-2 ${
                result.eligible
                  ? "border-green-400 bg-green-50"
                  : "border-destructive/40 bg-destructive/5"
              }`}
            >
              <div className="flex items-start gap-3">
                {result.eligible ? (
                  <CheckCircle className="text-green-500 mt-0.5 shrink-0" size={24} />
                ) : (
                  <XCircle className="text-destructive mt-0.5 shrink-0" size={24} />
                )}
                <div>
                  <h3 className="font-bold text-lg text-foreground">{result.message}</h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{result.details}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
