import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import composeEmailActions from "../redux/actions/composeEmail.action";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3f51b5"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3f51b5"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#95a2e6"
      },
      "&:hover fieldset": {
        borderColor: "#fff"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#95a2e6"
      }
    }
  }
})(TextField);

export class ComposeEmail extends Component {
  componentDidMount = () => {
    // if (this.props.authenticated) {
    //   console.log("valid credentials");
    //   this.onRetrieveInbox();
    // } else {
    //   console.log("not valid credentials");
    //   this.props.history.push("/profile");
    // }
    this.props.authenticated !== true && this.props.history.push("/profile");
  };

  onChangeToAddress = event => {
    this.props.updateToAddress(event.target.value);
  };

  onChangeSubject = event => {
    this.props.updateSubject(event.target.value);
  };

  onChangeMessage = event => {
    this.props.updateMessage(event.target.value);
  };

  onSendEmail = event => {
    event.preventDefault();
    console.log("onSendEmail Clicked");
    this.props.onSendMessage();
  };

  render() {
    return (
      <Paper
        style={{
          width: "85%",
          minHeight: "300px",
          height: "auto",
          margin: "auto",
          padding: "15px"
        }}
      >
        <form
          onSubmit={this.onSendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <CssTextField
            label="To"
            placeholder="example@gmail.com"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeToAddress}
            value={this.props.currentTo}
            name="to"
            fullWidth
          />
          <CssTextField
            label="Subject"
            placeholder="Subject Here!"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            onChange={this.onChangeSubject}
            value={this.props.currentSubject}
            name="subject"
            fullWidth
          />
          <CssTextField
            label="Message"
            placeholder="Message Here!"
            variant="outlined"
            style={{ margin: "8px 0 8px 0" }}
            rows="13"
            onChange={this.onChangeMessage}
            value={this.props.currentMessage}
            name="message"
            multiline
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "flex-start"
            }}
          >
            <Button
              type="submit"
              value="Submit"
              variant="outlined"
              color="primary"
              style={{
                margin: "0px 5px",
                color: "#3f51b5",
                borderColor: "#3f51b5"
              }}
            >
              Send
              <SendOutlinedIcon style={{ margin: "0px 3px" }} />
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ margin: "0px 5px", color: "red", borderColor: "red" }}
              onClick={this.props.onTrashMessage}
            >
              Delete
              <DeleteOutlinedIcon style={{ margin: "0px 3px" }} />
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.Profile.authenticated,
  currentTo: state.ComposeEmail.to,
  currentSubject: state.ComposeEmail.subject,
  currentMessage: state.ComposeEmail.message,
  emailError: state.ComposeEmail.error
});

const mapDispatchToProps = {
  updateToAddress: composeEmailActions.updateTo,
  updateSubject: composeEmailActions.updateSubject,
  updateMessage: composeEmailActions.updateMessage,
  onTrashMessage: composeEmailActions.trashMessage,
  onSendMessage: composeEmailActions.sendMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeEmail);
