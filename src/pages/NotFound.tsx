import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="Page Not Found | Sovertick"
        description="The page you requested was not found. Visit Sovertick to explore web, mobile, and AI development services, or return to the homepage for quick support."
        keywords="404 page, Sovertick, web and mobile development, AI development services"
        canonicalPath="/404"
        robots="noindex, follow"
        image="/branding/sovertick-logo.svg"
      />
      <main className="flex min-h-screen items-center justify-center bg-muted" role="main" aria-label="Page not found">
        <section className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">{t("notFound.subtitle")}</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            {t("notFound.back")}
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;
