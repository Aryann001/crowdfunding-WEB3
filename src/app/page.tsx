"use client";
import React from "react";
import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
import { CROWDFUNDING_FACTORY } from "@/constants/contracts";
import { useReadContract } from "thirdweb/react";
import { CampaignCard } from "@/components/CampaignCard";

const page = () => {
  const contract = getContract({
    client: client,
    chain: sepolia,
    address: CROWDFUNDING_FACTORY,
  });

  const { data: campaigns, isPending } = useReadContract({
    contract,
    method:
      "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
    params: [],
  });

  return (
    <main className="mx-auto max-w-7xl px-4 mt-4 sm:px-6 lg:px-8">
      <div className="py-10">
        <h1 className="text-4xl text-purple-600 font-bold mb-4">Campaigns</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {!isPending &&
            campaigns &&
            (campaigns.length > 0 ? (
              campaigns.map((campaign, index) => (
                <CampaignCard campaignAddress={campaign.campaignAddress} key={index} />
              ))
            ) : (
              <div>
                <p>No campaign is found</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default page;
