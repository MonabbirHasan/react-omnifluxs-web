import React from "react";
import "./userorder.css";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { Badge, Table } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from "../../../../assets/img/img1.png";
import { Typography } from "@mui/material";
const UsersOrder = () => {
  let table = new DataTable("#user_order");

  return (
    <>
      <div className="userorder_page">
        <div className="container">
          <div className="component_title">
            <Typography
              variant="h4"
              fontWeight={0}
              letterSpacing={1}
              fontFamily={"fantasy"}
            >
              Customer Orders
            </Typography>
          </div>
          <div className="user_order_wrapper">
            <div className="user_order_table">
              <table id="user_order">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">customer name</th>
                    <th scope="col">location</th>
                    <th scope="col">price</th>
                    <th scope="col">category</th>
                    <th scope="col">ragistared</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tbody_tr">
                    <td>
                      <LazyLoadImage
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                        }}
                        src={img1}
                      />
                    </td>
                    <td>
                      <h6>Felecia Burke</h6>
                      <p>example@mail.com</p>
                    </td>
                    <td>Hong Kong, China</td>
                    <td>$1000</td>
                    <td>Youtube</td>
                    <td>12.07.2018</td>
                    <td>
                      <span>
                        <Badge variant="contained">Active</Badge>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <LazyLoadImage
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                        }}
                        src={img1}
                      />
                    </td>
                    <td>
                      <h6>Felecia Burke</h6>
                      <p>example@mail.com</p>
                    </td>
                    <td>Hong Kong, China</td>
                    <td>$1000</td>
                    <td>Youtube</td>
                    <td>12.07.2018</td>
                    <td>
                      <span>
                        <Badge variant="contained">Active</Badge>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <LazyLoadImage
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                        }}
                        src={img1}
                      />
                    </td>
                    <td>
                      <h6>Felecia Burke</h6>
                      <p>example@mail.com</p>
                    </td>
                    <td>Hong Kong, China</td>
                    <td>$1000</td>
                    <td>Youtube</td>
                    <td>12.07.2018</td>
                    <td>
                      <span>
                        <Badge variant="contained">Active</Badge>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <LazyLoadImage
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                        }}
                        src={img1}
                      />
                    </td>
                    <td>
                      <h6>Felecia Burke</h6>
                      <p>example@mail.com</p>
                    </td>
                    <td>Hong Kong, China</td>
                    <td>$1000</td>
                    <td>Youtube</td>
                    <td>12.07.2018</td>
                    <td>
                      <span>
                        <Badge variant="contained">Active</Badge>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <LazyLoadImage
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                        }}
                        src={img1}
                      />
                    </td>
                    <td>
                      <h6>Felecia Burke</h6>
                      <p>example@mail.com</p>
                    </td>
                    <td>Hong Kong, China</td>
                    <td>$1000</td>
                    <td>Youtube</td>
                    <td>12.07.2018</td>
                    <td>
                      <span>
                        <Badge variant="contained">Active</Badge>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersOrder;
