import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const StudentHome = () => {
    const {user, isDarkMode} = useAuth();
    const [instance] = useAxiosSecure();
    const {data : studentStats = []} = useQuery({
        queryKey: ['student_stats'],
        queryFn: async() => {
            const res = await instance(`https://talk-time-server.vercel.app/student_stats/${user?.email}`);
            return res?.data;
        }
    })
    return (
        <div className="w-full p-4">
          <h1 className="text-xl font-bold mb-6">Hi! Welcome {user?.displayName}<small className="font-extralight"> (student)</small></h1>
           <hr></hr> 
           <h1 className="text-5xl my-6 text-center">My Classes</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                studentStats.map((item, index) =><div key={index} 
                className={`card card-side ${isDarkMode ? "bg-[#15154e] text-white" : "bg-base-100 text-black"}  shadow-xl`}>
                <figure className="w-1/3"><img src={item.image} alt="Movie" className="h-40 w-full"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.courseName}</h2>
                  <p>Instructor:{item.instructor} <br/> Email: {item.InstructrorEmail}</p>
                  <div className="card-actions justify-end">
                    
                  </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default StudentHome;