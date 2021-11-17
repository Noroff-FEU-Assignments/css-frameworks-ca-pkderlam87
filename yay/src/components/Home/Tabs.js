import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion'
import Paragraph from './../Paragraph';
import SocialMedia from './SocialMedia';

function TabsIndex() {
    return (
        <>
            <Accordion defaultActiveKey="one" className="d-md-none">
                <Accordion.Item eventKey="one">
                    <Accordion.Header>First</Accordion.Header>
                    <Accordion.Body>
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <SocialMedia />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="two">
                    <Accordion.Header>Second</Accordion.Header>
                    <Accordion.Body>
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <SocialMedia />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="three">
                    <Accordion.Header>Third</Accordion.Header>
                    <Accordion.Body>
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <SocialMedia />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="d-none d-md-block">
                <Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="one" title="First">
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <SocialMedia />
                    </Tab>
                    <Tab eventKey="two" title="Second">
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <SocialMedia />
                    </Tab>
                    <Tab eventKey="three" title="Third" >
                        <Paragraph content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus." />
                        <SocialMedia />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default TabsIndex
