import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";

class About extends Component {
  render() {
      if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="dextIn" style={{height : '300%', width : '300%'}}/>
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>
             <Typography variant="h5" align="left" color="textPrimary" paragraph>{bio}</Typography>
            <div className="row">
               <div className="columns address">
                  <h2>Contact Details</h2>
                   <Typography variant="h5" align="left" paragraph>
                       <span>{name}</span><br />
                   </Typography>
                   <a href="https://www.google.com/maps/place/A-26,+Pushpanjali+Enclave,+Pitam+Pura,+Delhi,+110034,+India/@28.6953781,77.1091473,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03faf6f076bd:0xa29b6ce97e05a5ef!8m2!3d28.6953734!4d77.1113413" className="button">
                       <span>{street}<br />
                             {city} {state}, {zip}
                       </span><br />
                   </a>
                   <a href="https://www.google.com/maps/place/Vihan+Motor/@29.4499169,77.7246827,17z/data=!3m1!4b1!4m5!3m4!1s0x390c1b20a0ea00eb:0x288732dcd9a0662e!8m2!3d29.4499122!4d77.7268767" className="button">
                       <span>276, Phase 1, Surendra Nagar<br />
                               Jansath road, Muzaffarnagar, 251001
                       </span><br />
                   </a>
                   <Typography variant="h5" align="left" paragraph>
                       <span>{phone}</span><br />
                       <span>{email}</span>
                   </Typography>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download = "Foodin"><i className="fa fa-download"></i>Download Brochure</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
