<template>
  <div class="content-block">
    <div class="container">
      <div class="content-block__info-wrapper">
        <p class="text-2">
          <b>Business Analytics</b> — a new, convenient tool for managing and
          forecasting your business performance, which will help analyze your
          own finances and cash flows, visualize your reporting, business
          processes, KPI's
        </p>
        <ul class="preference-list">
          <li>
            <h3 class="text-2">
              <span>
                <img
                  src="@/assets/img/loginPage/check_mark.svg"
                  alt="check_mark"
                />
              </span>
              <b>Interactive Reporting</b>
            </h3>
            <p class="text-3">
              In just a few clicks, you can connect your data from 1C, CRM
              (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay),
              Logistic (Nova Poshta), Google Analytics and many more systems
              that reflect different aspects of business activities.
            </p>
          </li>
          <li>
            <h3 class="text-2">
              <span>
                <img
                  src="@/assets/img/loginPage/check_mark.svg"
                  alt="check_mark"
                />
              </span>
              <b>Automated data updates</b>
            </h3>
            <p class="text-3">
              The application automatically updates and structures the data in
              just 60 seconds, saving you time and money.
            </p>
          </li>
          <li>
            <h3 class="text-2">
              <span>
                <img
                  src="@/assets/img/loginPage/check_mark.svg"
                  alt="check_mark"
                />
              </span>
              <b>Data Security</b>
            </h3>
            <p class="text-3">
              The Bank guarantees the safety of your personal data, ensuring
              their integrity and confidentiality.
            </p>
          </li>
        </ul>
      </div>
      <div class="content-block__form-wrapper">
        <AppForm />
      </div>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
import AppForm from "@/components/App/AppForm";
</script>
