import { useRouter } from "next/router"

export default function useIsDashboard() {
    const router = useRouter()
  return router.pathname.includes("dashboard" && "comments")
}
