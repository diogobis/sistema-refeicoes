import React from "react";
import { StatCardContainer, StatCardLabel, StatCardPercentage } from "./styles";

interface StatCardProps {
	percentage: number;
	label: string;
	variant?: "within" | "outside";
}

export function StatCard({
	percentage,
	label,
	variant = "within",
}: StatCardProps) {
	return (
		<StatCardContainer variant={variant}>
			<StatCardPercentage variant={variant}>
				{percentage.toFixed(2)}%
			</StatCardPercentage>
			<StatCardLabel variant={variant}>{label}</StatCardLabel>
		</StatCardContainer>
	);
}
