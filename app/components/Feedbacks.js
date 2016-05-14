import React from 'react';
import List from 'material-ui/List';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Loader from './shared/Loader';

class Feedbacks extends React.Component {
  componentDidMount() {
    this.props.onGenerateAvatar();
  }

  getLoaderStyle() {
    const iconSize = 35;
    const stroke = this.context.muiTheme.palette.primary3Color;
    return { width: iconSize, height: iconSize, stroke: stroke  };
  }

  renderAvatar() {
    const { feedbackAvatar, feedbackAvatarLoading } = this.props;
    return feedbackAvatarLoading ? <Loader className='avatar-loader' style={this.getLoaderStyle()} /> : feedbackAvatar;
  }

  render() {
    const { feedbacks } = this.props;
    return (
      <div>
        <List></List>
        <Card>
          <CardHeader
            title='Feedback'
            avatar={this.renderAvatar()}
            subtitle='Leave some feedback here' />
          <CardText>
          </CardText>
        </Card>
      </div>
    );
  }
}

Feedbacks.propTypes = {
  feedbacks: React.PropTypes.array,
  feedbackAvatarLoading: React.PropTypes.bool,
  feedbackAvatarError: React.PropTypes.bool,
  feedbackAvatar: React.PropTypes.string,
  onGenerateAvatar: React.PropTypes.func,
};

Feedbacks.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Feedbacks;
