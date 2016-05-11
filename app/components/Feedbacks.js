import React from 'react';
import List from 'material-ui/List';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Loader from './shared/Loader';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Feedbacks extends React.Component {
  componentDidMount() {
    this.props.onGenerateAvatar();
  }

  getLoaderStyle() {
    const iconSize = 40;
    return { width: iconSize, height: iconSize };
  }

  render() {
    const { feedbacks, feedbackAvatar, feedbackAvatarLoading, feedbackAvatarError } = this.props;
    return (
      <div>
        <List></List>
        <Card>
          <CardHeader
            title='Feedback'
            avatar={<Loader className='avatar-loader' size={40} style={this.getLoaderStyle()} />}
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

export default Feedbacks;
