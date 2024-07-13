export function Logout(){
    localStorage.removeItem("IdUser", 1)
    localStorage.removeItem("codUser")
    localStorage.removeItem("senhauser")
    location.reload()
}