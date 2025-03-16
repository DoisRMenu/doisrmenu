
import { DiscordLogo, Phone } from 'lucide-react';

interface ContactButtonsProps {
  discordLink: string;
  whatsappLink: string;
}

const ContactButtons = ({ discordLink, whatsappLink }: ContactButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a 
        href={discordLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
      >
        <DiscordLogo className="h-5 w-5" />
        <span>Discord</span>
      </a>
      
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
      >
        <Phone className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactButtons;
