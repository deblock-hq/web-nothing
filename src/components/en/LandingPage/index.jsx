import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { otherLanguagesAvailable } from "../../../i18n";
import SplashPage_v1 from "../../../views/SplashPage_v1";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!otherLanguagesAvailable.includes(lng)) {
      navigate("/");
    }

    if (!lng) i18n.changeLanguage("en");
  }, []);

  return (
    <Suspense fallback="loading">
      <SplashPage_v1 title={t("title")} />
    </Suspense>
  );
};

export default Home;
