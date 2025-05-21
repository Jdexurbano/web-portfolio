import BackToHome from "@/shared/components/BackToHome";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AlertModal from "@/components/MessagePage/AlertModal";
function MessagePage() {
  return (
    <section className=" text-white">
      <div className=" flex items-center gap-5">
        <BackToHome />
        <h1 className="font-medium text-xl md:text-2xl">Message</h1>
      </div>

      <div className="mt-10 space-y-8">
        <Input type="email" placeholder="Email" className="max-w-xl md:h-12" />
        <Textarea placeholder="Message" className="max-w-xl" />
        <AlertModal />
      </div>
    </section>
  );
}

export default MessagePage;
