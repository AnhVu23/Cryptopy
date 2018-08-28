import React, {Component} from 'react';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import * as $ from 'jquery';

class wysiwyg extends Component {
  config = {
    toolbarInline: true,
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
    toolbarVisibleWithoutSelection: true
  };
  constructor() {
    super();
    this.state = {
      model: 'Edit text'
    }
  }

  handleModelChange = (model) => {
    this.setState({
      model: model
    })
  };

  render() {
    return (
      <FroalaEditor model={this.state.model}
                    onModelChange={this.handleModelChange.bind(this)}
                    toolbarInline={true}
                    charCounterCount={false}
                    toolbarButtons={ ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'paragraphFormat', 'align',
                      'formatOL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo']}
                    toolbarVisibleWithoutSelection={true}
                    config={this.config}/>
    )
  }
}

export default wysiwyg;