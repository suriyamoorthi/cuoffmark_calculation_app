import React, { useEffect, useState } from "react";
import { GetUserDetails } from "../Service/Post.service";

function UserDetails() {
  const [userDatas, setUserDats] = useState([]);
  const GetData = async () => {
    let { data } = await GetUserDetails();
    console.log(data, "data");
    setUserDats(data);
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title mt-3 mb-3">
                CutOff-Mark Calculation Form
              </h5>
              <hr />
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mathsmark</th>
                    <th scope="col">Physicsmark</th>
                    <th scope="col">Chemistrymark</th>
                    <th scope="col">CutoffMark</th>
                    <th scope="col">Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {userDatas.map((u) => {
                    return (
                      <tr key={u._id}>
                        <td>{u._id}</td>

                        <td>{u.Name}</td>
                        <td>{u.Email}</td>
                        <td>{u.Mathsmark}</td>

                        <td>{u.Physicsmark}</td>
                        <td>{u.Chemistrymark}</td>
                        <td>{u.Cutoffmark}</td>
                        <td>{u.rank}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
