import React from 'react';
import { Card, CardBody } from '@/components/ui/Card';

export default function DisclaimerPage() {
  return (
    <Card>
      <CardBody>
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
        <p className="text-gray-600 mb-4">
          The information provided on Stock Sessions is for general
          informational purposes only. All information on the site is provided
          in good faith, however we make no representation or warranty of any
          kind, express or implied, regarding the accuracy, adequacy, validity,
          reliability, availability or completeness of any information on the
          site.
        </p>
        <p className="text-gray-600 mb-4">
          Under no circumstance shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the site or
          reliance on any information provided on the site. Your use of the site
          and your reliance on any information on the site is solely at your own
          risk.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Risks</h2>
        <p className="text-gray-600">
          Investing in financial instruments involves risks, including the
          potential loss of principal. Before making any investment decision,
          please consider your own financial situation, risk tolerance, and seek
          professional advice if necessary.
        </p>
      </CardBody>
    </Card>
  );
}
