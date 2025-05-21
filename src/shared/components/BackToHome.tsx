import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
function BackToHome() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");
  return (
    <Button
      onClick={handleNavigate}
      className="flex items-center gap-2 text-sm md:text-base cursor-pointer text-white bg-transparent"
    >
      <ArrowLeft size={24} />
      Back to Home
    </Button>
  );
}

export default BackToHome;
