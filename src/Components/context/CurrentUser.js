export default function currentUser({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
         const URL = `${process.env.REACT_APP_BACKEND_URL}/user/userProfile`
            let response = await fetch(URL, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
   }


