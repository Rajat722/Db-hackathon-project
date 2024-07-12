# Welcome, eletech, to the 2024 TDI Global Hackathon
## Contents
1. [Bye bye]()
1. [About your hackathon environment](#about-your-hackathon-environment)
2. [Access Issues](#access-issues)
3. [GCP](#gcp)
    1. [First log-in](#first-log-in)
    2. [Access Rights & Principals](#access-rights--principals)
    3. [Use a custom/user-managed Service Account wherever possible](#use-a-customuser-managed-service-account-wherever-possible)
    4. [Limitations & Restrictions](#limitations--restrictions)
    5. [Developing in Google Cloud Console & Cloud Shell](#developing-in-google-cloud-console--cloud-shell) 
4. [GitHub](#github)
    1. [Limitations & Restrictions](#limitations--restrictions-1) 
5. [Terraform Cloud](#terraform-cloud)
6. [OpenShift](#openshift) 
7. [Use Cases](#use-cases)
8. [DataSets](#datasets)
9. [Additional useful guides](#additional-useful-guides-)
10. [FAQ](#faq)
    1. [Authenticating with GCP APIs from code](#authenticating-with-gcp-apis-from-code)
    2. [How do I deploy Cloud Run?](#how-do-i-deploy-cloud-run)
    3. [How do I deploy App Engine?](#how-do-i-deploy-app-engine)
    4. [How do I deploy Cloud Functions?](#how-do-i-deploy-cloud-functions)

## About your hackathon environment
Your hackathon environment consists of four components:
1. A GCP project (https://console.cloud.google.com/home/dashboard?project=hack-team-eletech)
2. This GitHub repository (https://github.com/db-hackathon/eletech)
3. A Terraform Cloud workspace (https://app.terraform.io/app/db-hackathon-2024/workspaces/hack-team-eletech)
4. A namespace in a shared RedHat Openshift 4.13 cluster (https://console-openshift-console.apps.dbh.dbhackathon.org/)

You have considerable interactive access to your GCP project.
Using the GitHub repository and the Terraform Cloud workspace are entirely optional.

> **Note**
> This README content may be changed or overwritten by the hackathon organisors during the event. If you intend to create documentation please house it in a separate file.

## Access Issues
If you have any issues accessing any aspect of the hackathon environment, please raise an issue [here](https://github.com/db-hackathon/support/issues/new/choose), 
or ask a colleague to do so.

## [GCP](https://console.cloud.google.com/home/dashboard?project=hack-team-eletech)
### First log-in
To log in to the GCP Cloud Console:
1. Navigate to https://console.cloud.google.com.
2. Sign out if you're already signed in.
3. On the first form (headed, "Sign in to continue to Google Cloud Platform") enter your hackathon user ID then click "Next".
   1. To derive your hackathon user ID, take the personal email address you signed up with, substitute the "@" with "." and append "@db-hackathon.com".
   2. For example, foo@bar.com becomes foo.bar.com@db-hackathon.com.
4. On the next form (headed, "Hi <name>"), click "Forgot password?".
5. Follow the password recovery process. It will send a link to your personal email address.
6. Follow that link and set a new password.
7. Set up 2FA immediately.
8. Navigate to https://console.cloud.google.com/home/dashboard?project=hack-team-eletech.

> Walkthough Video Tutorial including 2FA Setup - **[Video Here](https://youtu.be/fs8jDCwwqFI)**

### Access Rights & Principals
The below APIs have been activated on your project. You cannot activate APIs yourselves.
* aiplatform.googleapis.com
* appengine.googleapis.com
* appengineflex.googleapis.com
* appenginereporting.googleapis.com
* artifactregistry.googleapis.com
* automl.googleapis.com
* bigquery.googleapis.com
* bigqueryconnection.googleapis.com
* cloudasset.googleapis.com
* cloudbuild.googleapis.com
* clouderrorreporting.googleapis.com
* cloudfunctions.googleapis.com
* cloudscheduler.googleapis.com
* cloudsupport.googleapis.com
* composer.googleapis.com
* contactcenteraiplatform.googleapis.com
* contactcenterinsights.googleapis.com
* dataflow.googleapis.com
* dataproc.googleapis.com
* datastudio.googleapis.com
* dialogflow.googleapis.com
* discoveryengine.googleapis.com
* documentai.googleapis.com
* eventarc.googleapis.com
* eventarcpublishing.googleapis.com
* language.googleapis.com
* logging.googleapis.com
* monitoring.googleapis.com
* notebooks.googleapis.com
* pubsub.googleapis.com
* retail.googleapis.com
* run.googleapis.com
* secretmanager.googleapis.com
* servicemanagement.googleapis.com
* serviceusage.googleapis.com
* speech.googleapis.com
* sql-component.googleapis.com
* sqladmin.googleapis.com
* storage-api.googleapis.com
* storage-component.googleapis.com
* storage.googleapis.com
* storagetransfer.googleapis.com
* texttospeech.googleapis.com
* timeseriesinsights.googleapis.com
* translate.googleapis.com
* videointelligence.googleapis.com
* vision.googleapis.com
* workflowexecutions.googleapis.com
* workflows.googleapis.com
* workstations.googleapis.com

Every team member has the following roles granted at project level:
* organizations/984428091370/roles/serviceAccountMetadataViewer
* roles/aiplatform.migrator
* roles/aiplatform.tensorboardWebAppUser
* roles/aiplatform.user
* roles/appengine.appAdmin
* roles/appengine.appCreator
* roles/artifactregistry.admin
* roles/automl.editor
* roles/bigquery.connectionAdmin
* roles/bigquery.dataOwner
* roles/bigquery.resourceViewer
* roles/bigquery.user
* roles/bigquerydatapolicy.maskedReader
* roles/browser
* roles/cloudasset.viewer
* roles/cloudbuild.builds.approver
* roles/cloudbuild.builds.editor
* roles/cloudbuild.connectionAdmin
* roles/cloudbuild.integrationsOwner
* roles/cloudbuild.integrationsViewer
* roles/cloudbuild.workerPoolOwner
* roles/cloudfunctions.developer
* roles/cloudscheduler.admin
* roles/cloudsql.admin
* roles/cloudsupport.techSupportEditor
* roles/cloudtranslate.editor
* roles/composer.admin
* roles/contactcenteraiplatform.admin
* roles/contactcenterinsights.editor
* roles/dataflow.developer
* roles/dataproc.editor
* roles/datastudio.viewer
* roles/dialogflow.admin
* roles/discoveryengine.admin
* roles/documentai.editor
* roles/errorreporting.admin
* roles/eventarc.developer
* roles/iam.roleViewer
* roles/logging.admin
* roles/monitoring.editor
* roles/notebooks.admin
* roles/notebooks.legacyViewer
* roles/oauthconfig.viewer
* roles/pubsub.editor
* roles/retail.admin
* roles/run.admin
* roles/secretmanager.admin
* roles/servicemanagement.quotaViewer
* roles/serviceusage.serviceUsageConsumer
* roles/speech.editor
* roles/storage.admin
* roles/storagetransfer.admin
* roles/timeseriesinsights.datasetsEditor
* roles/visionai.editor
* roles/workflows.editor
* roles/workstations.admin
* roles/workstations.networkAdmin

You have an "infrastructure SA" (infrastructure@hack-team-eletech.iam.gserviceaccount.com) with the same IAM permissions as team members.
You can authenticate as it from a GitHub Actions workflow anywhere in this repo using the Workload Identity Federation method of [Google's auth action](https://github.com/google-github-actions/auth)
and run gcloud commands using [Google's setup-gcloud Action](https://github.com/google-github-actions/setup-gcloud).
There's an [example workflow in your repo](./.github/workflows/example_using_gcloud.yml) to start you off.
This SA is also used when you provision infrastructure using your Terraform Cloud workspace.

You have a "workload SA" (workload@hack-team-eletech.iam.gserviceaccount.com) that you can use to attach to your workloads (e.g. Cloud Run revisions).
The default SAs have been de-privileged.
The workload SA has the following roles granted at project level:
* roles/aiplatform.user
* roles/artifactregistry.createOnPushWriter
* roles/automl.predictor
* roles/bigquery.connectionUser
* roles/bigquery.dataEditor
* roles/bigquery.dataViewer
* roles/bigquery.filteredDataViewer
* roles/bigquery.jobUser
* roles/bigquery.readSessionUser
* roles/bigquerydatapolicy.maskedReader
* roles/cloudasset.viewer
* roles/cloudbuild.builds.builder
* roles/cloudbuild.tokenAccessor
* roles/cloudbuild.workerPoolUser
* roles/cloudfunctions.invoker
* roles/cloudsql.client
* roles/cloudsql.instanceUser
* roles/cloudtranslate.user
* roles/composer.worker
* roles/contactcenteraiplatform.viewer
* roles/contactcenterinsights.viewer
* roles/dataflow.admin
* roles/dataflow.worker
* roles/dataproc.hubAgent
* roles/dataproc.worker
* roles/datastudio.editor
* roles/dialogflow.client
* roles/dialogflow.reader
* roles/discoveryengine.admin
* roles/documentai.apiUser
* roles/errorreporting.writer
* roles/eventarc.connectionPublisher
* roles/eventarc.eventReceiver
* roles/eventarc.publisher
* roles/logging.logWriter
* roles/monitoring.metricWriter
* roles/notebooks.runner
* roles/pubsub.publisher
* roles/pubsub.subscriber
* roles/retail.editor
* roles/run.invoker
* roles/secretmanager.secretAccessor
* roles/secretmanager.secretVersionAdder
* roles/servicemanagement.quotaViewer
* roles/serviceusage.serviceUsageConsumer
* roles/speech.client
* roles/storage.objectViewer
* roles/storagetransfer.transferAgent
* roles/storagetransfer.user
* roles/timeseriesinsights.datasetsEditor
* roles/visionai.admin
* roles/workflows.invoker

## Use a custom/user-managed Service Account wherever possible
The default compute service account in your project has been de-privileged.
Whenever you provision compute (e.g. a VMs powering a Jupyter notebook or dataflow pipeline, a Cloud Run service or a Cloud Function)
you must attach your Workload SA (workload@hack-team-eletech.iam.gserviceaccount.com) , usually referred to in the GCP documentation as "attaching a custom SA".
Both your GitHub Actions workflows and Terraform Cloud workspaces have pre-populated variables containing the Workload SA email.
See the respective sections below for details.

Examples:
* App Engine
  * [gcloud](https://cloud.google.com/appengine/docs/legacy/standard/python/user-managed-service-accounts#gcloud) 
  * [Terraform - Flex](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/app_engine_flexible_app_version#service_account)
  * [Terraform - Standard](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/app_engine_standard_app_version#service_account)
* [Cloud Build](https://cloud.google.com/build/docs/securing-builds/configure-user-specified-service-accounts)
  * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudbuild_trigger#service_account_email)
* Cloud Composer
  * [Console](https://cloud.google.com/composer/docs/how-to/managing/creating#console)
  * [gcloud](https://cloud.google.com/composer/docs/how-to/managing/creating#gcloud)
  * [Terraform](https://cloud.google.com/composer/docs/how-to/managing/creating#terraform)
* Cloud Functions
  * [Console](https://cloud.google.com/functions/docs/securing/function-identity#console)
  * [gcloud](https://cloud.google.com/functions/docs/securing/function-identity#gcloud)
  * [Terraform - Gen1](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudfunctions_function#service_account_email)
  * [Terraform - Gen2](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudfunctions2_function#service_account_email)
* Cloud Run
  * [Console](https://cloud.google.com/run/docs/securing/service-identity#console)
  * [gcloud](https://cloud.google.com/run/docs/securing/service-identity#gcloud)
  * [Terraform](https://cloud.google.com/run/docs/securing/service-identity#terraform)
* [Dataflow](https://cloud.google.com/dataflow/docs/concepts/security-and-permissions#specify_a_user-managed_worker_service_account)
  * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dataflow_job#service_account_email)
  * [Terraform - Flex](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dataflow_flex_template_job#parameters)
* Cloud Scheduler
  * [Schedules](https://cloud.google.com/run/docs/triggering/using-scheduler#create_job)
  * [Tasks](https://cloud.google.com/run/docs/triggering/using-tasks#creating_http_tasks_with_authentication_tokens)
  * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_scheduler_job#service_account_email)
* Dataproc
  * [Console](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#console)
  * [gcloud](https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/service-accounts#gcloud-command)
  * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/dataproc_cluster#service_account)
* Notebooks
  * [Console](https://cloud.google.com/vertex-ai/docs/workbench/user-managed/create-new#console) - see step 8
  * [gcloud](https://cloud.google.com/sdk/gcloud/reference/notebooks/instances/create#--service-account)
  * [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/notebooks_instance#service_account)
* [Workflows](https://cloud.google.com/workflows/docs/authentication#deploy_a_workflow_with_a_custom_service_account)
  *  [Terraform](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/workflows_workflow#service_account)
* [Vertex AI](https://cloud.google.com/vertex-ai/docs/general/custom-service-account#attach)
  * Vertex AI's Console UI does not always expose the field necessary to specify a user managed SA.  
However, most such screens have a "View Code <>" button in the top right.
The generated code is populated with the fields you entered in the UI.
Using the curl option. you can add the missing attribute in a text editor 
(typically `"serviceAccount": "workload@hack-team-eletech.iam.gserviceaccount.com"`, to be added as a peer of the `"name": "..."` or `"displayName" : "..."` attribute) 
and execute the resulting command in Cloud Shell.

Here's an example for tuning a language model:
```shell
PROJECT_ID="hack-team-eletech"

curl \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
https://europe-west4-aiplatform.googleapis.com/v1/projects/hack-team-eletech/locations/europe-west4/pipelineJobs?pipelineJobId=tune-large-model-$(date +"%Y%m%d%H%M%S") -d \
$'{
    "displayName": "tune-large-model",    
    "serviceAccount": "workload@hack-team-move.iam.gserviceaccount.com", 
    "runtimeConfig": {
        "gcsOutputDirectory": "gs://artifacts.hack-team-eletech.appspot.com/Foo/",
        "parameterValues": {
            "location": "us-central1",
            "project": "hack-team-eletech",
            "large_model_reference": "text-bison@001",
            "model_display_name": "mytunedmodel_1",
            "train_steps": 100,
            "encryption_spec_key_name": "",
            "dataset_uri": "gs://artifacts.hack-team-eletech.appspot.com/Bar.jsonl",
            "evaluation_data_uri": "",
            "evaluation_output_root_dir": "",
            "learning_rate": 3
        }
    },
    "templateUri": "https://us-kfp.pkg.dev/ml-pipeline/large-language-model-pipelines/tune-large-model/v2.0.0"
}'
```

### Limitations & Restrictions
* You have a budget of EUR ~150.
Your team lead will receive notifications when your actual or forecast spend passes 25%, 50%, 75%, 90% and 100%. If you are the team lead please cascade this information to your fellow team members.
Your project will be torn down if you approach 100% or if you are spending rapidly. 
* Fairly severe quotas are in place to help manage the above.
Talk to the happy hackathon helpers if this is impeding your idea.
* You cannot create services accounts.
  * Use your infrastructure SA to interact with GCP from GitHub.
  * Use your workload SA to power your workloads.
* You cannot create or upload service account keys.
  * Use your own interactive access or Workload Identity Federation from GitHub Actions workflows instead.

### Developing in Google Cloud Console & Cloud Shell
Built into the Google Cloud Console is a Shell & Editor. Google Cloud Shell is already provisioned with a lot of the standard development tools including:
- Git
- Kubeclt
- Docker 
- Helm 
- Terraform
- gcloud cli 
- & more.

To access cloud shell simply Click the Cloud Shell Icon in the top right hand corner of your Cloud Console Window.
</br>
<img src="https://storage.googleapis.com/db-hack23-readme-assets/readme-001-activate-cloud-shell.png"
     alt="Activate Cloud Shell"
     style="max-height: 230px; float:center" />
</br></br>
Cloud Shell will activate at the bottom of your Cloud Console window. You can also access the inbuilt IDE for code development and Git access ect by clicking the ```Open Eiditor``` button from within Cloud Shell.
</br>
<img src="https://storage.googleapis.com/db-hack23-readme-assets/readme-002-cloud-shell.png"
     alt="Activate Cloud Shell amd IDE"
     style="max-height: 230px; float:center" />

From here you could easily clone your team's GitHub repositories and start iterating on your hackathon solution. 

**Setting up Cloud Shell for Development**
Simply run the following commands to Auth your cloud shell against your Google Cloud Account. 

1. Simply run ```gcloud auth login``` and follow the prompts to complete Oauth2 Auth from Cloud Shell to your Cloud Project.
2. Configure your default Cloud Shell Google Cloud Project by running ```gcloud config set project hack-team-eletech```

---
</br>

## [GitHub](https://github.com/db-hackathon/eletech)
This repository is at your disposal.
All team members have "maintainer" access.
No branch protection rules are enforced.

A set of useful [GitHub Actions variables](https://docs.github.com/en/actions/learn-github-actions/variables) have been populated for you:
* vars.INFRA_SA_EMAIL - The email address representation of the SA you can use to deploy infrastructure. It has the same access rights as human team members.: infrastructure@hack-team-eletech.iam.gserviceaccount.com
* vars.INFRA_SA_ID - The fully qualified ID representation of the SA you can use to deploy infrastructure.: projects/hack-team-eletech/serviceAccounts/infrastructure@hack-team-eletech.iam.gserviceaccount.com
* vars.PROJECT_ID - Your team's GCP Project ID.: hack-team-eletech
* vars.PROJECT_NUMBER - Your teams' GCP Project Number.: 697992046095
* vars.WORKLOAD_IDENTITY_PROVIDER - The ID of the Workload Identity provider you cah use to authenticate from GitHub Actions to your GCP project.: projects/785558430619/locations/global/workloadIdentityPools/github-2023/providers/github-2023
* vars.WORKLOAD_SA_EMAIL - The email address representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : workload@hack-team-eletech.iam.gserviceaccount.com
* vars.WORKLOAD_SA_ID - The fully qualified ID representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : projects/hack-team-eletech/serviceAccounts/workload@hack-team-eletech.iam.gserviceaccount.com

### Limitations & Restrictions
* The hackathon platform owns the files that were seeded into this repo.
If you modify them, your changes may be overwritten.
* We have a hard limit of 50,000 GitHub Actions minutes for the whole hackathon.
We request heavy user consider offloading what they can to Cloud Build instead
* We have a hard limit of 50GB of GitHub Actions and Packages storage for the whole hackathon.
  * If you produce very large GitHub Actions logs, please clean them up in a timely manner.
  * If you want to publish container images, please use GCP Artifact Registry.
  * For other artefacts, consider using Cloud Storage.

## [Terraform Cloud](https://app.terraform.io/app/db-hackathon-2024/workspaces/hack-team-eletech)
Your Terraform Cloud workspace is VCS-backed by this GitHub repository.
Pushing files to the "terraform" directory of this repo will automatically trigger a plan/apply cycle in TFC 
using the contents of that directory as the root module.

The workspace has been pre-configured so that the google and google-beta providers will authenticate using your infrastructure SA 
and default to creating resources in your project.
There's a [simple example](./terraform/main.tf) to start you off. 

A set of useful [Input variables](https://developer.hashicorp.com/terraform/language/values/variables) have been populated for you:
* infra_sa_email - The email address representation of the SA you can use to deploy infrastructure. It has the same access rights as human team members.: infrastructure@hack-team-eletech.iam.gserviceaccount.com
* infra_sa_id - The fully qualified ID representation of the SA you can use to deploy infrastructure.: projects/hack-team-eletech/serviceAccounts/infrastructure@hack-team-eletech.iam.gserviceaccount.com
* project_id - Your team's GCP Project ID.: hack-team-eletech
* project_number - Your teams' GCP Project Number.: 697992046095
* workload_identity_provider - The ID of the Workload Identity provider you cah use to authenticate from GitHub Actions to your GCP project.: projects/785558430619/locations/global/workloadIdentityPools/github-2023/providers/github-2023
* workload_sa_email - The email address representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : workload@hack-team-eletech.iam.gserviceaccount.com
* workload_sa_id - The fully qualified ID representation of the SA you can attach to your workloads (e.g. to a Cloud Run service). : projects/hack-team-eletech/serviceAccounts/workload@hack-team-eletech.iam.gserviceaccount.com

## OpenShift
### Interactive Access
Log in to OpenShift via https://console-openshift-console.apps.dbh.dbhackathon.org/.
No SSL cert has been provisioned, so you'll have to risk the warnings.
On that page, choose to "Log in with" the "githubidp" option and use the GitHub handle you signed up with to complete the authentication.

Once logged in, you will have access to two namespaces; one personal named after your GitHub handle, and one shared named after your team.

The team namespace has a special Kubernetes secret named "gcp-access".
The value of this secret is an automatically-refresh OAuth 2.0 token for your workload SA.
Use this to authenticate with GCP APIs from your workloads.
Each token expires after one hour, but the value of the secret is automatically refreshed.
Your application should tolerate having to refresh the token from the Kubernetes secret.
When it detects an expired token, simply access the Kubernetes secret again to get a fresh one.

## Use Cases

These are detailed in the [briefing pack](https://storage.cloud.google.com/hackathon_shared_storage/TeamLeadBriefingDeck.pdf), but to summarise here:

* How can we support children and young people who have family members affected by
dementia?
* How can we improve support to families after a dementia diagnosis?
* How can we create a virtual nurse service for carers taking care of loved ones living with
dementia?
* How can we improve our reach to carers within the LGBTQ+ communities to access support from
Dementia UK?
* How can we reach more male carers affected by dementia?
* How can we make Dementia UK content easily accessible?


### Datasets
Dementia UK data is provided for you to use to ground your application with relevant guidance.

Dementia UK's website provides informational web pages and related PDF leaflets. The PDF leaflets are available [here](https://storage.cloud.google.com/hackathon_shared_storage/dementia_uk_data/pdfs).

A spreadsheet of useful additional information is available [here](https://storage.cloud.google.com/hackathon_shared_storage/dementia_uk_data/useful_data.xlsx).  This contains the mapping of PDFs to URLs, google search volumes relating to dementia and information for specific use cases.), 

## Code Tutorials

### Google

* [Google Cloud Generative AI Training Resources](https://cloud.google.com/blog/topics/training-certifications/new-google-cloud-generative-ai-training-resources)

### Microsoft/OpenAI

* [Get Started with Microsoft Azure Power Apps, Power Automate and AI Builder](https://learn.microsoft.com/en-us/collections/g6r3irnpjjz8mj)
* [Microsoft Co-Pilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio)
* [Microsoft AI Builder](https://learn.microsoft.com/en-us/ai-builder/overview)
* [Get started using GPT-35-Turbo and GPT-4 with Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cpython-new&pivots=programming-language-studio)

## Additional useful guides 

1. TODO Update - [How to access the Teams Chat](https://storage.cloud.google.com/hackathon_shared_storage/teams_guide.docx)
2. [Hackathon Briefing Pack](https://storage.cloud.google.com/hackathon_shared_storage/TeamLeadBriefingDeck.pdf)
3. [Top tips designing for cognitive accessibility](https://storage.cloud.google.com/hackathon_shared_storage/Top_tips_cognitive_accessibility.pdf) and [video](https://youtu.be/yHTTG5Yh4bc?si=hIrjmR96uc1fPihH)

## FAQ
### Authenticating with GCP APIs from code
I've seen quite a few requests for assistance where colleagues feel they need an API key or SA key in order to auth with GCP APIs from their code. In general, you don't need this invoke our supported services. When running locally, gcloud login will suffice:

```bash
gcloud auth login <<you@db-hackathon.com>>
gcloud auth application-default login
```

When running on GCP-native compute using Google's client libraries or gcloud, as long as you've attached your Workload SA to the compute, the magic of [Application Default Credentials](https://cloud.google.com/docs/authentication/application-default-credentials) will kick in and the code will auth correctly.
When not using Google's client libraries, you can obtain an access token from the [metadata server](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances#applications).
You can pass this to the client libraries/gcloud/curl e.g.
```bash
curl -X POST \
-H "Authorization: Bearer $ACCESS_TOKEN" \
...
```

When running on OCP, the value of the secret "gcp-access" in your team's namespace will have a valid access token for your Workload SA.

### How do I deploy Cloud Run?
You can find a [GitHub Actions example here](./.github/workflows/example_deploy_cloud_run_action.yml) 
and a [Terraform example here](./terraform/example_cloud_run.tf).

### How do I deploy App Engine?
You can find a [GitHub Actions example here](./.github/workflows/example_deploy_app_engine_action.yml),
a [gcloud example here](./.github/workflows/example_deploy_app_engine_gcloud.yml) 
and a [Terraform example here](./terraform/example_app_engine.tf).

### How do I deploy Cloud Functions?
You can find a [GitHub Actions example here](./.github/workflows/example_deploy_cloud_function_action.yml), 
a [gcloud example here](./.github/workflows/example_deploy_cloud_function_gcloud.yml) 
and a [Terraform example here](./terraform/example_cloud_functions.tf).
