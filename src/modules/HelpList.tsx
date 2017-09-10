import * as React from "react";
import { Step, Stepper, StepButton, StepContent } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

/**
 * A basic vertical non-linear implementation
 */
class VerticalNonLinear extends React.Component {
    state = {
        stepIndex: 0
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        if (stepIndex < 2) {
            this.setState({ stepIndex: stepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step: number) {
        return (
            <div style={{ margin: "12px 0" }}>
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const { stepIndex } = this.state;

        return (
            <div style={{ maxWidth: 380, maxHeight: 400 }}>
                <Stepper
                    activeStep={stepIndex}
                    linear={false}
                    orientation="vertical"
                >
                    <Step>
                        <StepButton
                            onClick={() => this.setState({ stepIndex: 0 })}
                        >
                            Select an islands/countries from the list below
                        </StepButton>
                        <StepContent>
                            <p style={{ fontSize: "0.5em" }}>
                                When you start typing, it will give you
                                suggestions of all available areas. Once you
                                select it, you do not have to select one each
                                time you make a search.
                            </p>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton
                            onClick={() => this.setState({ stepIndex: 1 })}
                        >
                            Search the missing people list
                        </StepButton>
                        <StepContent>
                            <p style={{ fontSize: "0.5em" }}>
                                Click on{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    List
                                </span>{" "}
                                to see a list of people who have been reported
                                missing/unreachable
                            </p>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton
                            onClick={() => this.setState({ stepIndex: 2 })}
                        >
                            Add a Missing Person
                        </StepButton>
                        <StepContent>
                            <p style={{ fontSize: "0.5em" }}>
                                Click on{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    Add
                                </span>{" "}
                                to fill a form to add a missing person
                            </p>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepButton
                            onClick={() => this.setState({ stepIndex: 3 })}
                        >
                            Read Updates
                        </StepButton>
                        <StepContent>
                            <p style={{ fontSize: "0.5em" }}>
                                Click on the{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    Updates
                                </span>{" "}
                                tab for all important information from the
                                rescue team and more.
                            </p>
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        );
    }
}

export default VerticalNonLinear;
