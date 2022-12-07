import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import SplashPage_v2 from "../../../views/SplashPage_v2";

const languageTranslated = ["fr", "en"];

const Home = () => {
  const { t, i18n } = useTranslation("translation");
  const { lng } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!languageTranslated.includes(lng)) {
      navigate("/fr-FR");
    }
    // if()

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
