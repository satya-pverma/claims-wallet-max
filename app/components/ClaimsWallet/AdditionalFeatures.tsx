import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Typography } from '../ui/Typography';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AdditionalFeaturesProps {
  features: Feature[];
}

export function AdditionalFeatures({ features }: AdditionalFeaturesProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} variant="default" padding="md">
            <CardContent>
              <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <Typography variant="h4" className="mb-2">
                {feature.title}
              </Typography>
              <Typography color="secondary">{feature.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}