import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function AlertModal() {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild>
        <Button className="bg-secondary text-slate-950 px-8 cursor-pointer">
          Send
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>🚧 Feature in Development</AlertDialogTitle>
          <AlertDialogDescription>
            This feature is currently under development. Please check back later
            as we're working hard to bring it to you soon!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Okay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertModal;
