import "./App1.css";

const App1 = () => {
  return (
    <div className="app">
      <main className="frame-wrapper">
        <div className="frame">
          <div className="frame1">
            <div className="frame2">
              <div className="total-user">Total User</div>
              <b className="b">40,689</b>
            </div>
            <div className="frame3">
              <b className="b1">10293</b>
              <div className="total-user1">Live Users</div>
            </div>
            <div className="frame4">
              <div className="total-sales">Incident Reports</div>
              <b className="b2">89,000</b>
            </div>
            <div className="frame5">
              <div className="total-pending">Citizen Complaints</div>
              <b className="b3">2040</b>
            </div>
          </div>
          <div className="frame6">
            <div className="bg" />
            <div className="bg1" />
          </div>
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        </div>
      </main>
      <div className="frame7">
        <div className="image-5-parent">
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <div className="ellipse-parent">
            <div className="frame-child" />
            <img
              className="untitled-design-24-1"
              alt=""
              src="/untitled-design-24-1@2x.png"
            />
          </div>
        </div>
        <div className="frame-parent">
          <button className="frame8">
            <div className="home">Home</div>
          </button>
          <button className="frame9">
            <div className="create">Create</div>
          </button>
          <button className="frame10">
            <div className="analytics">Analytics</div>
          </button>
          <button className="frame11">
            <div className="responses">Responses</div>
          </button>
          <button className="frame12">
            <div className="moderate-posts">Moderate Posts</div>
          </button>
          <button className="frame13">
            <div className="responses">Crime Map</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App1;
