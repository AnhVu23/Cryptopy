import React, {Component} from 'react';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import {Input} from 'antd';
class wysiwyg extends Component {
  config = {
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'align', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'insertImage', 'insertLink', 'insertFile', 'insertVideo'],
    charCounterCount: false
  };
  constructor() {
    super();
    this.state = {
      model: ''
    }
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    })
  };

  render() {
    const {TextArea} = Input;
    return (
      <FroalaEditor model={this.state.model}
                    onModelChange={this.handleModelChange.bind(this)}
                    config={this.config}
      >
        <TextArea value={this.state.model}/>
      </FroalaEditor>
    )
  }
}

export default wysiwyg;