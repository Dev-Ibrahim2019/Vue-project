/* eslint-disable prettier/prettier */
import swal from "sweetalert";
export function useFlash() {
  function flash(title, message, level= 'success') {
    swal(title, message, level);
  }

  return { flash };
}
