import React from 'react';
import List from 'material-ui/List';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Loader from './shared/Loader';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const EMPTY_FIELD_ERROR = 'This field is required';

class Feedbacks extends React.Component {
  constructor() {
    super();

    this.state = {
      nameError: null,
      feedbackError: null,
      name: '',
      feedback: '',
    };

    this.handleSend = this.handleSend.bind(this);
  }

  componentDidMount() {
    this.props.onGenerateAvatar();
  }

  handleSend() {
    const { name, feedback } = this.state;

    this.setState({
      nameError: name ? null : EMPTY_FIELD_ERROR,
      feedbackError: feedback ? null : EMPTY_FIELD_ERROR,
    });

    if (feedback && name) {
      this.setState({ feedback: '', name: '' });
      this.props.onSend(name, feedback);
    }
  }

  getLoaderStyle() {
    const stroke = this.context.muiTheme.palette.primary3Color;
    return {
      ...styles.avatarLoader,
      stroke: stroke,
    };
  }

  renderAvatar() {
    var { feedbackAvatar, feedbackAvatarLoading } = this.props;

    if (feedbackAvatarLoading) {
      return (
        <Avatar style={{ backgroundColor: 'transparent' }}>
          <Loader style={this.getLoaderStyle()} />
        </Avatar>
      );
    } else {
      return <Avatar src={feedbackAvatar} />;
    }
  }

  render() {
    const { feedbacks } = this.props;
    const { nameError, feedbackError, name, feedback } = this.state;
    const avatar = this.renderAvatar();

    return (
      <div>
        <List>
        </List>
        <Card>
          <CardHeader
            title='Feedback'
            avatar={avatar}
            subtitle='Leave some feedback here' />
          <CardText>
            <TextField hintText='Enter name here'
              value={name}
              errorText={nameError}
              onChange={(event) => this.setState({ name: event.target.value })} />
            <br />
            <TextField floatingLabelText='Leave some feedback here'
              value={feedback}
              errorText={feedbackError}
              onChange={(event) => this.setState({ feedback: event.target.value })}
              type='text'
              multiLine={true}
              rows={4}
              style={styles.feedbackText} />
          </CardText>
          <CardActions style={styles.actions}>
            <RaisedButton label='Send'
              onTouchTap={this.handleSend}
              primary={true}
              icon={<FontIcon className="material-icons">feedback</FontIcon>} />
          </CardActions>
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
  onSend: React.PropTypes.func,
};

Feedbacks.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Feedbacks;

const styles = {
  feedbackText: {
    width: '100%',
  },
  avatarLoader: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
  },
  actions: {
    paddingLeft: '20px',
    paddingBottom: '20px',
  },
};
