import React from "react";
import studentimage from "../../images/admin1.jpg";
import bookimage from "../../images/book3.jpg";
import mailimage from "../../images/admin3.jpg";
import { useNavigate } from "react-router-dom";
export default function Adminpage() {
  let navigate = useNavigate();
  return (
    <div>
    <div className="container rounded  mt-5 mb-5">
      <div style={{marginTop:"200px"}} className="card-group">
      <div   className="card">
        <div className="card">
          <img className="card-img-top" src={studentimage} alt="book"></img>
          <div className="card-body">
            <button 
             onClick={() => navigate("/Adminborrowedbook")}
            style={{ marginTop: "10px",marginLeft:"60px" }} className="btn btn-success">
              Öğrenci Kitap Verme 
            </button>
          </div>
        </div>
      </div>
      <div   className="card">
        <div className="card">
          <img className="card-img-top" src={studentimage} alt="book"></img>
          <div className="card-body">
            <button 
             onClick={() => navigate("/Admintakebook")}
            style={{ marginTop: "10px",marginLeft:"60px" }} className="btn btn-success">
              Öğrenci Kitap Teslim Alma 
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div  className="card">
          <img  className="card-img-top" src={bookimage} alt="book"></img>
          <div className="card-body">
            <button
             onClick={() => navigate("/Adminadd")}
            style={{ marginTop: "10px",marginLeft:"60px" }} className="btn btn-success">
              Kitap Ekleme işlemleri
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card">
          <img style={{maxHeight:"320px"}} className="card-img-top" src={mailimage} alt="book"></img>
          <div className="card-body">
            <button 
            onClick={() => navigate("/AdminsendEmail")}
            style={{ marginTop: "10px",marginLeft:"60px" }} className="btn btn-success">
              Öğrenci Mail Gönderme
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
