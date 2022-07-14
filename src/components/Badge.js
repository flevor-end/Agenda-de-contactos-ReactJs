import React from 'react';

import './styles/Badge.css';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header Navbar__brand">
          <span className="font-weight-light">Informacion de <br /></span>
            <span className="font-weight-bold">Contacto</span>
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.email}</h3>
          <div>Cel. {this.props.phone}</div>
        </div>

        <div className="Badge__footer">#fabianPedraza</div>
      </div>
    );
  }
}

export default Badge;
