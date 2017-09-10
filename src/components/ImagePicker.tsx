/**
 * Updated version of https://codepen.io/anon/pen/EvqmPM
 * (original from mrMetalWood).
 *
 * Image Selector with data uri capture and display
 */

import * as React from "react";
import { Component } from "react";
import "./imagePicker.css";

interface State {
    data: any;
    fullScreen: boolean;
    loading: boolean;
}
class ImagePicker extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: null,
            fullScreen: false,
            loading: false
        };

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
        //   this.dataURItoBlob = this.dataURItoBlob.bind(this);
    }

    // dataURItoBlob(dataURI: string) {     // convert base64/URLEncoded data
    // component to raw binary data held in a string     let byteString;     if
    // (dataURI.split(',')[0].indexOf('base64') >= 0)         byteString =
    // atob(dataURI.split(',')[1]);     else         byteString =
    // decodeURI(dataURI.split(',')[1]);     // separate out the mime component
    // const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];     //
    // write the bytes of the string to a typed array     let ia = new
    // Uint8Array(byteString.length);     for (let i = 0; i < byteString.length;
    // i++) {         ia[i] = byteString.charCodeAt(i);     }     return new
    // Blob([ia], {type:mimeString}); }

    handleFileChange(event: any) {
        const { target } = event;
        const { files } = target;

        if (files && files[0]) {
            const reader = new FileReader();

            reader.onloadstart = () => this.setState({ loading: true });

            reader.onload = event => {
                // const imageData = event.target["result"]; var blob =
                // this.dataURItoBlob(imageData); console.log(blob);

                this.setState({ data: event.target["result"], loading: false });
            };

            reader.readAsDataURL(files[0]);
        }
    }

    handlePreviewClick() {
        const { data, fullScreen } = this.state;

        if (!data) {
            return;
        }

        this.setState({
            fullScreen: !fullScreen
        });
    }

    render() {
        const { data, fullScreen, loading } = this.state;
        const backgroundImage = data
            ? {
                  backgroundImage: `url(${data})`
              }
            : undefined;

        const previewClasses = [
            "preview",
            fullScreen ? "preview--fullscreen" : ""
        ].join(" ");

        return (
            <div style={{ paddingTop: 20 }}>
                <div
                    className={previewClasses}
                    style={backgroundImage}
                    onClick={this.handlePreviewClick}
                >
                    {!data &&
                    !loading && (
                        <label
                            className="label"
                            htmlFor="car"
                            style={{ fontSize: "0.7em", textAlign: "center" }}
                        >
                            Click to select missing peson image
                        </label>
                    )}
                    {loading && <span>Loading...</span>}
                </div>
                <input
                    id="car"
                    type="file"
                    accept="image/*"
                    capture={true}
                    onChange={this.handleFileChange}
                    style={{ visibility: "hidden" }}
                />
            </div>
        );
    }
}

export default ImagePicker;
