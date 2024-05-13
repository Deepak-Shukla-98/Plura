import { toast } from "react-hot-toast";

export default async function ServiceHandler(response: any) {
  const spinner = document.getElementById("spinner");
  if (navigator.onLine && !!spinner) {
    spinner.style.display = "grid";
  }
  return await response
    .then((res: any) => {
      const { method, url } = res.config;
      const { data, status } = res;
      if (!!spinner) {
        spinner.style.display = "none";
      }
      return data;
    })
    .catch(
      ({
        response: {
          data: { error },
        },
      }: any) => {
        if (!!spinner) {
          spinner.style.display = "none";
        }
        toast.error(!!error ? error : "Error");
        return error;
      }
    );
}
