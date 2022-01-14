import Sidebar from '../Sidebar/Sidebar';
import DashCard from './DashCard';
import SubDash from './SubDash';
const infosData = [
    {
        title: "Pending",
        background: "danger"
    },
    {
        title: "Today's",
        background: "primary"
    },
    {
        title: "Total's",
        background: "success"
    },
    {
        title: "Total's",
        background: "warning"
    },

]
const Dashboard = () => {

    return (
        <section style={{ backgroundColor: "#f4fffb" }} >
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 p-2 ms-3">
                    <div className="py-3">
                        <h4 className="secondary-text">
                            Dashboard
                        </h4>
                    </div>
                    <div className="row g-4">
                        {
                            infosData.map((info, index) => <DashCard key={index} info={info}></DashCard>)
                        }
                    </div>

                    <div className="row ms-2 px-4 pb-5 bg-white shadow">
                        <SubDash />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;