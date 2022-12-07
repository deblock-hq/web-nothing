import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SplashPage_v2 from "../../../views/SplashPage_v2";

const languageTranslated = ["fr", "en"];

const Home = () => {
  const { t, i18n } = useTranslation("translation");
  const { lng } = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  const FixCountryUppercase = location.pathname.split("-")[1].toUpperCase();

  useEffect(() => {
    if (!languageTranslated.includes(lng)) {
      navigate("/fr-FR");
    }
    if (location.pathname.split("-")[1] !== FixCountryUppercase) {
      navigate(`/${lng}-${FixCountryUppercase}`);
    }
    i18n.changeLanguage(lng);
  }, []);

  return (
    <Suspense fallback="loading">
      <SplashPage_v2
        h1="deblock"
        h2={t("non-custodial-wallet")}
        span={t("coming-soon")}
      />
    </Suspense>
  );
};

export default Home;
