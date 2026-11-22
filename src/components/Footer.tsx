import Link from "next/link";
import CopyrightYear from "@/components/CopyrightYear";
import { siteConfig } from "@/config/site";
import { FiGithub, FiLinkedin, FiTwitter ,   FiMail} from "react-icons/fi";
import { Suspense } from "react";
export default function Footer() {
 
  return (
    <footer className="border-t border-border/70 bg-background/60 text-center backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
       

            <div className="m-4 flex justify-center space-x-6">
          {siteConfig.socialLinks.github && (
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:text-yellow-900"
            >
              <span className="sr-only">GitHub</span>
              <FiGithub className="h-6 w-6" />
            </a>
          )}
          {siteConfig.socialLinks.linkedin && (
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:text-yellow-900"
            >
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="h-6 w-6" />
            </a>
          )}
          {siteConfig.socialLinks.twitter && (
            <a
              href={siteConfig.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="  hover:text-yellow-900"
            >
              <span className="sr-only">Twitter</span>
              <FiTwitter className="h-6 w-6" />
            </a>
          )}
          {siteConfig.personalInfo.email && (
            <a
              href={`mailto:${siteConfig.personalInfo.email}`}
              className="  hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <span className="sr-only">Email</span>
              <FiMail className="h-6 w-6" />
            </a>
          )}
        </div>
                <nav aria-label="Legal" className="flex-wrap items-center   gap-x-4 gap-y-3 justify-center sm:flex">
          <Link href="/proteccion-datos/privacy-policy" className="transition-colors hover:text-foreground ">
            Política de privacidad
          </Link>
          <Link href="/proteccion-datos/aviso-legal" className="transition-colors hover:text-foreground">
            Aviso legal
          </Link>
        </nav>
           <div className="text-center">
               <p className="text-sm   m-3">
            © <Suspense fallback="----"><CopyrightYear /></Suspense> All rights reserved{" "}
          </p>
       
     </div>
      </div>
    </footer>
  );
}

