import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropbox from "./Images/dropbox.webp";
import img2 from "./Images/img2.svg";
import img3 from "./Images/img3.svg";
import img4 from "./Images/img4.svg";
import img5 from "./Images/img5.svg";
import img6 from "./Images/img6.png";
import img7 from "./Images/img7.webp";
import img8 from "./Images/img8.webp";
import video from "./Video/vid1.mp4";
import { Link, List, ListItemIcon, ListItemText, Button, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import { Navbar, Row, Col, Card} from 'react-bootstrap';
function Webpage() {

  const footer = {
    color: 'white',
    textDecoration: 'none',
   

  };
  return (
    <>
      <Navbar style={{backgroundColor: "white", display: "flex", height: "14%" }}>
        <img src={dropbox} alt="Dropbox Logo" style={{ width: "13%" }} />
        <div style={{ marginLeft: "58%", marginTop: "10px", fontWeight: "600" }}>
          <Navbar.Brand href="#"><i class="fa fa-globe" aria-hidden="true"></i></Navbar.Brand>
          <Navbar.Brand href="#" style={{ marginLeft: "15px" }}>Sign Up</Navbar.Brand>
          <Navbar.Brand href="#" style={{ marginLeft: "15px" }}>Login</Navbar.Brand>
          <Button variant="contained" style={{ marginLeft: "15px" }}>Get Started</Button>
        </div>
      </Navbar>
      <br></br>
      <Row>
        <Col style={{ backgroundColor: "#2b2929" }}>
          <div style={{ margin: "60px", color: "white" }}>
            <h1 style={{ fontSize: "50px", lineHeight: "48px" }}>Everything you and your business need to work efficiently, all in one place</h1><br></br>
            <p>Collaborate seamlessly and deliver work faster from anywhere with Dropbox. Securely store your content,
              edit PDFs, share videos, sign documents and track file engagement—without leaving Dropbox.</p>
            <br></br>
            <Button variant="contained" style={{ height: "70px", borderRadius: "0px", color: "black", fontWeight: "bold" }}>Try it for free &nbsp; &nbsp; <i class="fa fa-arrow-right fa-fw" ></i> </Button>
            <br></br>
            <br></br>
            <Link href="#">or purchase now <i class="fa fa-arrow-right fa-fw"></i> </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Col>
        <Col style={{ backgroundColor: "black" }}>
          <video controls autoPlay style={{ marginTop: "90px", padding: "60px", width: "100%" }}>
            <source src={video} />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#f7f5f2" }} >
        <Col style={{ textAlign: "center", marginTop: "70px", marginBottom: "5%" }}>
          <h2>All the tools you need in one plan</h2>
          <p ><b>Store and share files. Sign and send documents. Record screens and comment. All in one place.</b></p>
        </Col>
      </Row>
      <Row style={{ marginTop: "4%" }}>
        <RadioGroup row >
          <FormControlLabel value="female" control={<Radio />} label="Billed monthly" style={{ marginLeft: "40px" }} />
          <FormControlLabel value="male" control={<Radio style={{ color: 'black' }} checked />} label="Billed yearly" />
        </RadioGroup>
      </Row>

      <div>
        <Row style={{ padding: "40px" }}>
          <Col>
            <Card style={{ backgroundColor: "#f2eee8", border: "none", borderRadius: "15px", height: "100%" }}>
              <Card.Body style={{ padding: "40px" }}>
                <br></br>
                <Card.Title> <i class="fa fa-user" aria-hidden="true"></i> For Professionals</Card.Title>
                <br></br>
                <Card.Text>
                  <h2>Essentials</h2>
                  <h5>$18/month</h5>
                </Card.Text>
                <br></br>
                <Button variant="contained" style={{ width: "80%", height: "60px", borderRadius: "0px", color: "white", fontWeight: "bold" }}> Try for free &nbsp; &nbsp; <i class="fa fa-arrow-right fa-fw" ></i> </Button>
                <br></br>
                <br></br>
                <Link href="#" style={{ textDecorationColor: "black", color: "black", fontWeight: "bold" }}>or buy now <i class="fa fa-arrow-right fa-fw" style={{ color: "black" }}></i></Link><br />

                <List style={{ display: "flex", flexDirection: "column" }}>
                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-user" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary=" 1 user" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-star-half-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="3 TB of storage" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Large file delivery up to 100 GB" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-clock-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="180 days to restore deleted files" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-bar-chart" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Track file engagement" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-pencil-square-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Unlimited signature requests" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-file-pdf-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="PDF editing" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-youtube-play" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Record, review, and edit video" />
                  </ListItemIcon>
                </List>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ backgroundColor: "#f2eee8", border: "none", borderRadius: "15px", height: "100%" }}><br></br>
              <Button variant="contained" disabled style={{ marginLeft: "61%", width: "35%", backgroundColor: "#b4dc19", fontSize: "12px", borderRadius: "20px", fontWeight: "600", color: "black" }}>  <i class="fa fa-empire" aria-hidden="true"></i>&nbsp; Best Value</Button>

              <Card.Body style={{ padding: "40px" }}>
                <Card.Title> <i class="fa fa-user" aria-hidden="true"></i>For smaller teams </Card.Title>
                <br></br>
                <Card.Text>
                  <h2>Business</h2>
                  <h5>$20/User/month</h5>
                </Card.Text>
                <br></br>
                <Button variant="contained" style={{ width: "80%", height: "60px", borderRadius: "0px", color: "white", fontWeight: "bold" }}> Try for free &nbsp; &nbsp; <i class="fa fa-arrow-right fa-fw" ></i> </Button>
                <br></br>
                <br></br>
                <Link href="#" style={{ textDecorationColor: "black", color: "black", fontWeight: "bold" }}>or buy now <i class="fa fa-arrow-right fa-fw" style={{ color: "black" }}></i></Link><br />

                <List style={{ display: "flex", flexDirection: "column" }}>
                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-user" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="3+ users" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-star-half-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Starts at 9 TB for the team" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Large file delivery up to 100 GB" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-clock-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="180 days to restore deleted files" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-bar-chart" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Track file engagement" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-pencil-square-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Unlimited signature requests" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-file-pdf-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="PDF editing" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-youtube-play" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Record, review, and edit video" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-users" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Set up admins" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-shield" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Know what content is shared" />
                  </ListItemIcon>
                </List>
              </Card.Body>
            </Card>
          </Col>




          <Col>
            <Card style={{ backgroundColor: "#f2eee8", border: "none", borderRadius: "15px", height: "100%" }}>

              <Card.Body style={{ padding: "40px" }} >
                <br></br>
                <Card.Title> <i class="fa fa-user" ></i> For large teams</Card.Title>
                <br></br>
                <Card.Text>
                  <h2>Business plus</h2>
                  <h5>$26/User/month</h5>
                </Card.Text>
                <br></br>
                <Button variant="contained" style={{ width: "90%", height: "60px", borderRadius: "0px", color: "white", fontWeight: "bold" }}> Try for free &nbsp; &nbsp; <i class="fa fa-arrow-right fa-fw" ></i> </Button>
                <br></br>
                <br></br>
                <Link href="#" style={{ textDecorationColor: "black", color: "black", fontWeight: "bold" }}>or buy now <i class="fa fa-arrow-right fa-fw" style={{ color: "black" }}></i></Link><br />

                <List style={{ display: "flex", flexDirection: "column" }}>
                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-user" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="3+ users" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-star-half-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Starts at 15 TB for the team" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Large file delivery up to 250 GB" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-clock-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="1 year to restore deleted files" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-bar-chart" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Track file engagement" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-pencil-square-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Unlimited signature requests" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-file-pdf-o" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="PDF editing" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-youtube-play" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Record, review, and edit video" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-users" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Set up tiered admin roles" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-shield" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Suspicious activity alerts" />
                  </ListItemIcon>

                  <ListItemIcon style={{ padding: "5px" }}>
                    <i class="fa fa-balance-scale" aria-hidden="true" style={{ marginRight: "10px", marginTop: "7px" }}></i>
                    <ListItemText primary="Compliance tracking" />
                  </ListItemIcon>
                </List>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ backgroundColor: "#f7f5f2" }} >
        <Row style={{ backgroundColor: "#f7f5f2" }} >
          <Col style={{ textAlign: "center", marginTop: "60px" }}>
            <h2><b> Dropbox supports you and your business</b></h2>
            <h2><b> at every stage</b></h2>
          </Col>
        </Row>
        <Row style={{ marginLeft: "50px", marginTop: "50px" }} >
          <Col>
            <Card style={{ border: "none", backgroundColor: "#f7f5f2" }}>
              <Card.Img variant="top" src={img2} style={{ width: "43%", marginBottom: "4px", marginLeft: "20px" }} />
              <Card.Body>
                <Card.Title> Store and protect your files</Card.Title>
                <Card.Text>
                  Starting at 3 TB of team storage and backup, with security features like file recovery, password protection, watermarking, and viewer history.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', border: "none", backgroundColor: "#f7f5f2" }}>
              <Card.Img variant="top" src={img3} style={{ width: "43%", marginBottom: "4px", marginLeft: "20px" }} />
              <Card.Body>
                <Card.Title> Share your content</Card.Title>
                <Card.Text>
                  Forget email attachments. With Dropbox, you can deliver large files and share trackable links with real-time document analytics to help make data-driven decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', border: "none", backgroundColor: "#f7f5f2" }}>
              <Card.Img variant="top" src={img4} style={{ width: "43%", marginBottom: "4px", marginLeft: "20px" }} />
              <Card.Body>
                <Card.Title>Collaborate on your work</Card.Title>
                <Card.Text>
                  Reduce meetings with Capture and use Replay to streamline feedback and approval processes on video projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col  >
            <Card style={{ width: '18rem', border: "none", backgroundColor: "#f7f5f2" }}>
              <Card.Img variant="top" src={img5} style={{ width: "43%", marginBottom: "4px", marginLeft: "20px" }} />
              <Card.Body>
                <Card.Title> Manage your business</Card.Title>
                <Card.Text>
                  Make it easy to prepare, send, and eSign your most important contracts. Automate manual processes with tools like eSignature templates, which let you reuse documents in seconds.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: "#1e1919" }}>
        <Row  >
          <Col style={{ textAlign: "center", marginTop: "70px", color: "white", marginBottom: "5%" }}>
            <h1>Over 600,000 teams use Dropbox</h1>
            <br></br>
            <h6 >
              <Link href="#" style={{ color: "white", textDecorationColor: "white" }}>Learn more about our customers
                <i class="fa fa-arrow-right fa-fw"></i> </Link>
            </h6>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#242121", color: 'white' }}>
          <Col >
            <img src={img6} alt="Designit Logo" style={{ marginLeft: "80px", marginTop: "80px" }} />
          </Col>

          <Col style={{ marginRight: "12%", marginTop: "17%" }} >
            <h6>“Our team is constantly working across different countries, time zones and offices. A lot of solutions can accommodate that now, but none make it as seamless as Dropbox and Dropbox Paper.”</h6>
            <br></br>
            <h5 >
              <Link href="#" style={{ color: "white", textDecorationColor: "white" }}>View case studies
                <i class="fa fa-arrow-right fa-fw"></i> </Link>
            </h5><br></br>
            <h6>Morten Thomsen</h6>
            <p style={{ fontWeight: "500", color: "grey", marginBottom: "17%" }}>Global IT Lead</p>

            <label style={{ fontSize: "22px", fontWeight: "500", color: "grey", marginBottom: "10%" }}>
              01/08 <i class="fa fa-arrow-right fa-fw"></i>
            </label>
          </Col>
        </Row>
        <Row>
          <Col style={{ margin: "3%" }}>
            <Card style={{ borderColor: "#1e1919" }}>
              <Card.Img src={img7} />
              <Card.Body style={{ backgroundColor: "#2b2929", color: "white", padding: "40px" }}>
                <br></br>
                <Card.Title>For Work</Card.Title>
                <br></br>
                <br></br>
                <Card.Text>
                  Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe — all in one place.
                </Card.Text>
                <br></br>
                <br></br>
                <Button variant="contained" style={{ width: "54%", height: "60px", borderRadius: "0px", color: "black", fontWeight: "bold" }}>Get dropbox for work &nbsp; &nbsp; <i class="fa fa-arrow-right fa-fw" ></i> </Button>

              </Card.Body>
            </Card>
          </Col>
          <Col style={{ margin: "3%" }}>
            <Card style={{ borderColor: "#1e1919" }}>
              <Card.Img src={img8} />
              <Card.Body style={{ backgroundColor: "#2b2929", color: "white", padding: "40px" }}>
                <br></br>
                <Card.Title>For personal use</Card.Title>
                <br></br>
                <br></br>
                <Card.Text>
                  Keep everything that’s important to you and your family shareable and safe in one place. Back up files in the cloud, share photos and videos, and more.</Card.Text>
                <br></br>
                <Button variant="contained" style={{ width: "65%", height: "60px", borderRadius: "0px", color: "black", fontWeight: "bold" }}>Get dropbox for personal use &nbsp;<i class="fa fa-arrow-right fa-fw" ></i> </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ color: "white", padding: "40px" }}>
          <Col>
            <h1>Get organized. Get working. Get<br></br> Dropbox.</h1>
          </Col>
          <Col>
            <Button variant="contained" style={{ height: "60px", borderRadius: "0px", marginLeft: "30%", color: "black", fontWeight: "bold" }}>Start your free trial &nbsp; &nbsp; <i class="fa fa-arrow-right fa-fw" ></i> </Button>
          </Col>
        </Row>
      </div >
      <div style={{ backgroundColor: "black", color: "white", padding: "60px" }}>
        <Row>
          <Col>
            <h3>Dropbox</h3><br></br><br></br>
            <Link href="#" style={footer}>Desktop app </Link> <br></br><br></br>
            <Link href="#" style={footer}>Mobile app </Link> <br></br><br></br>
            <Link href="#" style={footer}> integrations</Link> <br></br><br></br>
            <Link href="#" style={footer}>Features </Link> <br></br><br></br>
            <Link href="#" style={footer}> Solutions</Link> <br></br><br></br>
            <Link href="#" style={footer}> Security</Link> <br></br><br></br>
            <Link href="#" style={footer}> Early access</Link> <br></br><br></br>
            <Link href="#" style={footer}>templates </Link> <br></br><br></br>

          </Col>

          <Col>
            <h3>Products</h3><br></br><br></br>
            <Link href="#" style={footer}> Plus</Link> <br></br><br></br>
            <Link href="#" style={footer}> Professional</Link> <br></br><br></br>
            <Link href="#" style={footer}> Business</Link> <br></br><br></br>
            <Link href="#" style={footer}> Enterprise</Link> <br></br><br></br>
            <Link href="#" style={footer}> Dash (beta)</Link> <br></br><br></br>
            <Link href="#" style={footer}> Dropbox Sign</Link> <br></br><br></br>
            <Link href="#" style={footer}>DocSend </Link> <br></br><br></br>
            <Link href="#" style={footer}> Plans</Link> <br></br><br></br>
            <Link href="#" style={footer}>Products updates </Link> <br></br><br></br>

          </Col>
          <Col>
            <h3>Features</h3><br></br><br></br>
            <Link href="#" style={footer}>Send large files</Link> <br></br><br></br>
            <Link href="#" style={footer}>Send long videos </Link> <br></br><br></br>
            <Link href="#" style={footer}>Cloud photo storage </Link> <br></br><br></br>
            <Link href="#" style={footer}> Cloud photo storage</Link> <br></br><br></br>
            <Link href="#" style={footer}>Secure file transfer </Link> <br></br><br></br>
            <Link href="#" style={footer}> Password manager</Link> <br></br><br></br>
            <Link href="#" style={footer}> Cloud backup</Link> <br></br><br></br>
            <Link href="#" style={footer}> Edit PDFs</Link> <br></br><br></br>
            <Link href="#" style={footer}> Electronic Signatures</Link> <br></br><br></br>
            <Link href="#" style={footer}>Screen recorder</Link> <br></br><br></br>
          </Col>
          <Col>
            <h3>Support</h3><br></br><br></br>
            <Link href="#" style={footer}>Help Center</Link> <br></br><br></br>
            <Link href="#" style={footer}>Contact us </Link><br></br><br></br>
            <Link href="#" style={footer}> Privacy & terms</Link><br></br><br></br>
            <Link href="#" style={footer}>Cookie policy </Link><br></br><br></br>
            <Link href="#" style={footer}> Cookies & CCPA preferences</Link><br></br><br></br>
            <Link href="#" style={footer}> AI principles</Link><br></br><br></br>
            <Link href="#" style={footer}> Sitemap</Link><br></br><br></br>
            <Link href="#" style={footer}>Learning resources </Link><br></br><br></br>
          </Col>


          <Col>
            <h3>Resources</h3><br></br><br></br>
            <Link href="#" style={footer}> Blog</Link><br></br><br></br>
            <Link href="#" style={footer}>Customer stories </Link><br></br><br></br>
            <Link href="#" style={footer}>Resources library </Link><br></br><br></br>
            <Link href="#" style={footer}>Developers </Link><br></br><br></br>
            <Link href="#" style={footer}>Community forums </Link><br></br><br></br>
            <Link href="#" style={footer}>Referrals </Link><br></br><br></br>
            <Link href="#" style={footer}> Reseller partners</Link><br></br><br></br>
            <Link href="#" style={footer}>Integration partners </Link><br></br><br></br>
            <Link href="#" style={footer}> Find a partner</Link><br></br><br></br>
          </Col>

          <Col >
            <h3>Company</h3><br></br><br></br>
            <Link href="#" style={footer}> About Us</Link><br></br><br></br>
            <Link href="#" style={footer} >Jobs </Link><br></br><br></br>
            <Link href="#" style={footer}>Investor relations </Link><br></br><br></br>
            <Link href="#" style={footer}>ESG </Link><br></br><br></br>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col >
            <Link href="#"><i class="fa fa-xing" style={{ color: "white", fontSize: '20px' }}></i></Link>
            <Link href="#"><i class="fa fa-facebook-square" style={{ color: "white", marginLeft: "20px", fontSize: '20px' }}></i></Link>
            <Link href="#"><i class="fa fa-youtube-play" style={{ color: "white", marginLeft: "20px", fontSize: '20px' }}></i></Link>
            <br></br>
            <br></br>
            <hr style={{ width: "11%" }}></hr>
          </Col>
        </Row>
        <Row>
          <Col >
            <br></br>
            <i class="fa fa-globe" aria-hidden="true"></i> &nbsp;<Link href="#" style={{ color: "white", fontSize: "17px" }}>English(United States) <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>

          </Col>
        </Row>
      </div >
    </>
  );
}

export default Webpage;


