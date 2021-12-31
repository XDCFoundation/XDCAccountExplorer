import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import AccountsPanel from './dashboard/accountsPanel';

const DashboardPage = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <AccountsPanel/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            Masternodes
                        </CardTitle>
                        <CardBody>
                            todo: content here
                        </CardBody>
                    </Card>
                </div>
                <div className="col-6">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            Burnt vs Minted
                        </CardTitle>
                        <CardBody>
                            todo: content here
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
