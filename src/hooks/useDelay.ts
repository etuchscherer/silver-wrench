import { sleep } from "../utils/sleep";

async function useDelay(ms: number) {
  return sleep(ms);
}

export default useDelay;