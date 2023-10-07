import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from "@tanstack/react-query";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const {user, isDarkMode, loading} = useAuth();
    const [instance] = useAxiosSecure();
    
    const {data : adminStats = {}} = useQuery({
        queryKey: ['admin_stats'],
        enabled: !loading,
        queryFn: async() => {
            const res =  await instance('/admin_stats')
            // console.log(res.data)
            return res?.data
        }
    })

    const {data : chartData = []} = useQuery({
        queryKey: ['payments_chartData'],
        enabled: !loading,
        queryFn: async() => {
            const res =  await instance('/payments_chartData')
            // console.log(res.data)
            return res?.data
        }
    })
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      const tooltipContent = (tooltipProps) => {
        const { payload } = tooltipProps;
    
        if (!payload || payload.length === 0) {
          return null;
        }
    
        const dataPoint = payload[0].payload; 
    
        return (
          <div className="bg-black bg-opacity-50">
            <p>Instructor: {dataPoint.instructor}</p>
            <p>Course Price: {dataPoint.coursePrice}</p>
            <p>Course Name: {dataPoint.courseName}</p>
            <p>Instructor Email: {dataPoint.InstructrorEmail}</p>
            <p>Enrolled Students: {dataPoint.enrolledStudents}</p>
          </div>
        );
      }

    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-bold mb-6">Hi! Welcome {user?.displayName}<small className="font-extralight"> (admin)</small></h1>
            <div>
                <div className={`stats stats-vertical lg:stats-horizontal shadow w-full
                ${isDarkMode ? "bg-[#18185a] text-white" : "bg-white text-black"}`}>
                    <div className="stat">
                        <div className={`stat-title ${isDarkMode ? "text-white": "text-black"}`}>Revenue</div>
                        <div className="stat-value">${adminStats.totalRevenue}</div>
                    </div>
                    
                    <div className="stat">
                        <div className={`stat-title ${isDarkMode ? "text-white": "text-black"}`}>Students</div>
                        <div className="stat-value">{adminStats.students}</div>
                    </div>
                    
                    <div className="stat">
                        <div className={`stat-title ${isDarkMode ? "text-white": "text-black"}`}>Instructor</div>
                        <div className="stat-value">{adminStats.instructors}</div>
                    </div>
                    <div className="stat">
                        <div className={`stat-title ${isDarkMode ? "text-white": "text-black"}`}>Classes</div>
                        <div className="stat-value">{adminStats.classes}</div>
                        <p>Denied: {adminStats.deniedClasses}</p>
                    </div>
                    
                    </div>
            </div>
            <div>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="enrolledStudents" />
                        <YAxis />
                        <Legend />
                        <Tooltip content={tooltipContent} />
                        <Bar dataKey="enrolledStudents" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminHome;