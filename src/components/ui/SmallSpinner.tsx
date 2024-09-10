import style from "./SpinnerLoading.module.css";
import Wrapper from "./Wrapper";

export default function SmallSpinner() {
  return (
    <>
      <span className={`${style.loaderForm}`}></span>
    </>
  );
}
