import * as tags from "../frontend/tags";
import {AuthOption} from "../lib/enums";

const options = {
  cookieName: "tryM2",
  authentication: AuthOption.none,
  serverConfig: {
    CONTAINERS: "../lib/LocalContainerManager",
    MATH_PROGRAM: "Macaulay2",
      // tslint:disable-next-line:max-line-length
    MATH_PROGRAM_COMMAND: "export PATH=~/bin:$PATH; export WWWBROWSER=open; M2 -e \"printWidth=0; topLevelMode = WebApp\"",
    port: "8002",
      // tslint:disable-next-line:max-line-length
      resumeString: "Type " + tags.mathJaxHtmlTag + "<span class=\"M2PastInput\" onclick=\"document.getElementsByClassName('M2CurrentInput')[0].textContent=this.textContent\">listUserSymbols</span>" + tags.mathJaxEndTag + " to print the list of existing symbols.\n\ni* : " + tags.mathJaxInputTag,
  },
  startInstance: {
    host: "127.0.0.1",
    username: "m2user",
    port: "123",
    sshKey: "/home/ubuntu/InteractiveShell/id_rsa",
    containerName: "",
  },
  perContainerResources: {
    cpuShares: 2,
    memory: 256,
  },
  hostConfig: {
    minContainerAge: 10,
    maxContainerNumber: 1,
    containerType: "m2container",
    sshdCmd: "/usr/sbin/sshd -D",
    dockerCmdPrefix: "sudo ",
    host: "192.168.2.42",
    username: "ubuntu",
    port: "22",
    sshKey: "/home/ubuntu/keys/host_key",
  },
//  help: require("./HelpMacaulay2").help(),
};

const overrideDefaultOptions = function(overrideOptions, defaultOptions) {
  for (const opt in overrideOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      if (defaultOptions[opt] instanceof Function) {
        defaultOptions[opt] = overrideOptions[opt];
      } else if (defaultOptions[opt] instanceof Object) {
        overrideDefaultOptions(overrideOptions[opt], defaultOptions[opt]);
      } else {
        defaultOptions[opt] = overrideOptions[opt];
      }
    } else {
      defaultOptions[opt] = overrideOptions[opt];
    }
  }
};

export {options, overrideDefaultOptions};
