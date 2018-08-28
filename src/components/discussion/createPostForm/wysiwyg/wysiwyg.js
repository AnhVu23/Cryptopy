import React, {Component} from 'react';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import {Input} from 'antd';
class wysiwyg extends Component {
  config = {
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'emoticon', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarVisibleWithoutSelection: true
  };
  constructor() {
    super();
    this.state = {
      model: 'Type Something'
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
      <FroalaEditor tag='textarea'
                    model={this.state.model}
                    onModelChange={this.handleModelChange.bind(this)}
                    config={this.config}
      >
        <TextArea value={this.state.model}/>
      </FroalaEditor>
    )
  }
}

export default wysiwyg;