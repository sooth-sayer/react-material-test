import React from 'react';
import List from 'material-ui/List';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Loader from './shared/Loader';

class Feedbacks extends React.Component {
  componentDidMount() {
    this.props.onGenerateAvatar();
  }

  render() {
    const { feedbacks, feedbackAvatar, feedbackAvatarLoading, feedbackAvatarError } = this.props;
    return (
      <div>
        <List></List>
        <Card>
          <CardHeader
            title='Feedback'
            avatar={<Loader />}
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
