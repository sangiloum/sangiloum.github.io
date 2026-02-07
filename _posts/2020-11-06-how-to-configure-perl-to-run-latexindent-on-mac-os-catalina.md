---
title: "How to configure Perl to run latexindent on Mac OS Catalina"
permalink: /2020/how-to-configure-perl-to-run-latexindent-on-mac-os-catalina/
description: Migrated from legacy IBS WordPress.
canonical_url: https://sangiloum.github.io/2020/how-to-configure-perl-to-run-latexindent-on-mac-os-catalina/
featured_image: /assets/legacy/uploads/sites/2/2020/11/ctan_lion_350x350.png
featured_image_original_url: https://dimag.ibs.re.kr/home/sangil/wp-content/uploads/sites/2/2020/11/ctan_lion_350x350.png
featured_image_source: featured_media
categories:
  - it
---
The “[latexindent](https://ctan.org/pkg/latexindent)” is a Perl script that indents a LaTeX file to make it easier to read, and is included in [MacTeX](https://tug.org/mactex/). As most of us install the MacTeX, it should be easy to use latexindent. However, the default installation does not work because it requires extra configuration on Perl. To make it worse, this install isn’t trivial at all. You can find [questions on Stackoverflow](https://tex.stackexchange.com/questions/445521/latexindent-cant-locate-log-log4perl-pm-in-inc-you-may-need-to-install-the-l). Here’s what I did in order to set up the latexindent on MacOS without using brew to install Perl again.

## Install xcode command line tools

In order to use C compilers or git on Mac, it is necessary to install command line tools. On the terminal, run this command.

``` wp-block-preformatted
xcode-select --install
```

## Configure the CPATH environment

Due to some weird reasons, some necessary files for compiling some packages are hidden on Mac OS Catalina. In order to make some header files to be available for compilers, we need to set up the CPATH variable. Otherwise, there will be an error message saying “Fatal error: ‘EXTERN.h’ file not found”.

To find this file, one can run the following command.

``` wp-block-preformatted
find /Library/Developer/CommandLineTools/SDKs -name EXTERN.h -print
```

There may be many versions; you can choose the one that matches the version of Perl installed on Mac. In my case, the version of Perl was v5.18.4. The version of Perl can be found by “perl -v”. On my Mac, EXTERN.h for this version was in /Library/Developer/CommandLineTools/SDKs/MacOSX11.0.sdk/System/Library/Perl/5.18/darwin-thread-multi-2level/CORE/EXTERN.h. Thus, I set the CPATH environment as follows.

``` wp-block-preformatted
export CPATH=/Library/Developer/CommandLineTools/SDKs/MacOSX11.0.sdk/System/Library/Perl/5.18/darwin-thread-multi-2level/CORE
```

## Install Perl packages by cpan

The latexindent requires a few Perl packages to be installed. Here is the command to run.

``` wp-block-preformatted
cpan -i Log::Log4perl Log::Dispatch::File YAML::Tiny File::HomeDir Unicode::GCString
```

Like me, most of you will see many questions, because in its first run, it requires to configure itself. Here’s what I chose.

``` wp-block-preformatted
What approach do you want? (Choose 'local::lib', 'sudo' or 'manual') [local::lib] sudo
```

After all this, latexindent should be ready. If not, then you can try to install missing Perl packages again by using “cpan -i”.

I use latexindent on [Visual Studio Code](https://code.visualstudio.com). The standard extension for LaTeX, [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop), uses latexindent to indent a LaTeX file.
