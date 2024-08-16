import { AppColorsArray } from "./../AppColorsArray/index";
import { AppLogo } from "./../AppLogo/index";
import { AppMath } from "./../AppMath/index";
import { AppName } from "./../AppName/index";
import { AppWelcome } from "./../AppWelcome/index";
export const ComponentsList = () => {
  return (
    <div className="div">
      <AppLogo />
      <AppName />
      <AppMath />
      <AppWelcome />
      <AppColorsArray />
    </div>
  );
};
