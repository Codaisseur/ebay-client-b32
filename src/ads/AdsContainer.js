import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAds } from "../actions/ads";

class AdsContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchAds();
  }

  render() {
    console.table(this.props.ads);

    return (
      <div>
        <h1>Ads</h1>
        <ul>
          {this.props.ads.map(ad => (
            <li key={ad.id}>
              <Link to={`/ads/${ad.id}`}>{ad.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ ads }) => ({ ads })
const mapDispatchToProps = { fetchAds }

export default connect(mapStateToProps, mapDispatchToProps)(AdsContainer)
