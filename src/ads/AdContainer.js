import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchAd } from "../actions/ads";

class AdContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchAd(this.props.match.params.id);
  }

  render() {
    const { ad } = this.props;

    if (!ad) return null;

    console.table(this.props.ad);

    return (
      <div>
        <h1>{this.props.ad.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ ad }) => ({ ad });
const mapDispatchToProps = { fetchAd };

export default connect(mapStateToProps, mapDispatchToProps)(AdContainer);
