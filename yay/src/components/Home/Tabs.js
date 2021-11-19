import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Paragraph from './../Paragraph';
import SocialMedia from './SocialMedia';
import tab1 from '../images/tab/tab1.jpg';
import tab2 from '../images/tab/tab2.jpg';
import tab3 from '../images/tab/tab3.jpg';
import Tab from 'react-bootstrap/Tab';
import { CustomAccordionHeader } from '../../styles/TabAccordion';
import { CustomAccordionBody } from '../../styles/TabAccordion';
import { Wrapper } from '../../styles/TabAccordion';
import { CustomTab } from '../../styles/TabAccordion';
import { CustomButtonTab } from '../../styles/Button';
import Tabs from 'react-bootstrap/Tabs';

function TabsIndex() {
    return (
        <>
            <Accordion defaultActiveKey="one" className="d-md-none">
                <Accordion.Item eventKey="one">
                    <CustomAccordionHeader>First</CustomAccordionHeader>
                    <CustomAccordionBody>
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <img
                            className="d-block w-100"
                            src={tab1}
                            alt={tab1}
                        />
                        <SocialMedia />
                    </CustomAccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="two">
                    <CustomAccordionHeader>Second</CustomAccordionHeader>
                    <CustomAccordionBody>
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <img
                            className="d-block w-100"
                            src={tab2}
                            alt={tab2}
                        />
                        <SocialMedia />
                    </CustomAccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="three">
                    <CustomAccordionHeader>Third</CustomAccordionHeader>
                    <CustomAccordionBody>
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <img
                            className="d-block w-100"
                            src={tab3}
                            alt={tab3}
                        />
                        <SocialMedia />
                    </CustomAccordionBody>
                </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
                <Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="one" title="First">
                        <Wrapper>
                            <img src={tab1} alt={tab1} />
                            <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        </Wrapper>
                        <SocialMedia />
                    </Tab>
                    <Tab eventKey="two" title="Second">
                        <Wrapper>
                            <img src={tab2} alt={tab2} />
                            <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        </Wrapper>
                        <SocialMedia />
                    </Tab>
                    <Tab eventKey="three" title="Third" >
                        <Wrapper>
                            <img
                                src={tab3}
                                alt={tab3}
                            />
                            <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        </Wrapper>
                        <SocialMedia />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default TabsIndex
