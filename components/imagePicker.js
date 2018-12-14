import React from "react";
import t from "tcomb-form-native";
import ImageFactory from "react-native-image-picker-form";
import { observer } from "mobx-react";

const Form = t.form.Form;
const DocumentFormStruct = t.struct({
  image: t.String
});

type Props = {};
type State = {
  value: Object,
  options: Object
};

class ImagePicker extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      options: {
        fields: {
          image: {
            config: {
              title: "Select image",
              options: ["Open camera", "Select from gallery", "Cancel"],
              // Used on Android to style BottomSheet
              style: {
                titleFontFamily: "GTWalsheim-Medium"
              }
            },
            error: "No image provided",
            factory: ImageFactory
          }
        }
      }
    };
  }

  render() {
    return (
      <Form
        ref={(ref: any) => {
          this.form = ref;
        }}
        type={DocumentFormStruct}
        value={this.state.value}
        options={this.state.options}
      />
    );
  }
}

export default observer(ImagePicker);
